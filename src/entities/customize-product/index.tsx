import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import * as fabric from 'fabric';
import styled from 'styled-components';
import IMGShirt from '@/assets/shirt.png';
import IMGShirtYellow from '@/assets/shirt_yellow.png';
import IMGShirtRed from '@/assets/shirt_red.png';
import { SketchPicker } from 'react-color';
import { CongCu } from './MenuDetail';
import { listMenuCustomize } from '@/based/data/Data';
import { UndoIcon, RedoIcon, ZoomInIcon, ZoomOutIcon } from '@/based/config/SVGIcon';
import { Input } from '@/components/ui/input';
import { exportCanvasAsImage } from '@/helpers';

type StarPointsParams = {
  numPoints: number;
  outerRadius: number;
  innerRadius: number;
  centerX: number;
  centerY: number;
};

export default function CustomizeProduct() {
  const canvaRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [color, setColor] = useState<string>('#ff0000');
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [listImage, setListImage] = useState<string[]>([]);
  const [detailCanvas, setDetailCanvas] = useState({
    xPosition: 0,
    yPosition: 0,
  });

  const [selectedImg, setSelectedImg] = useState(IMGShirt);

  useEffect(() => {
    if (canvaRef.current) {
      const fabricCanvas = new fabric.Canvas(canvaRef.current);
      setCanvas(fabricCanvas);

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        fabricCanvas.dispose();
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Delete') {
      deleteSelectedObject();
    }
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    if (selectedObject) {
      selectedObject.set('fill', newColor);
      canvas?.renderAll();
    }
  };

  const handleExportCanvasAsImage = () => {
    if (canvas) {
      exportCanvasAsImage({ canvas, selectedImg, detailPosition: detailCanvas });
    }
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target?.result;
        if (dataURL) {
          setListImage([...listImage, dataURL.toString()]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addImage = (url: string) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const fabricImage = new fabric.Image(img, {
        left: 0,
        top: 0,
        scaleX: 150 / img.width,
        scaleY: 150 / img.height,
      });
      canvas?.add(fabricImage);
      canvas?.renderAll();
    };
  };

  const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };
  const calculateStarPoints = ({ numPoints, outerRadius, innerRadius, centerX, centerY }: StarPointsParams) => {
    const angle = Math.PI / numPoints;
    let points = [];

    for (let i = 0; i < 2 * numPoints; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = centerX + radius * Math.cos(i * angle - Math.PI / 2);
      const y = centerY + radius * Math.sin(i * angle - Math.PI / 2);
      points.push({ x, y });
    }

    return points;
  };
  const addShape = (shape: string) => {
    if (!canvas) return;
    let left = 100;
    let top = 100;
    const padding = 10;
    const color = randomColor();
    let newShape;

    const objects = canvas.getObjects();
    const isOverlapping = (left: number, top: number) => {
      return objects.some((obj) => {
        return obj.left === left || obj.top === top || obj.left + obj.width === left || obj.top + obj.height === top;
      });
    };

    while (isOverlapping(left, top)) {
      left += padding;
      top += padding / 2 - 3;
    }
    const commonProperties = { left: left, top: left, fill: color };

    switch (shape) {
      case 'rectangle':
        newShape = new fabric.Rect({ width: 50, height: 50, ...commonProperties });
        break;
      case 'circle':
        newShape = new fabric.Circle({ radius: 25, ...commonProperties });
        break;
      case 'triangle':
        newShape = new fabric.Triangle({ width: 50, height: 50, ...commonProperties });
        break;
      case 'star':
        const points = calculateStarPoints({
          numPoints: 5,
          outerRadius: 25,
          innerRadius: 10,
          centerX: left,
          centerY: top,
        });
        newShape = new fabric.Polygon(points, {
          left: left,
          top: top,
          fill: color,
          stroke: 'black',
          strokeWidth: 2,
        });
        break;
      case 'line':
        newShape = new fabric.Line([50, 50, 50, 50], { ...commonProperties });
        break;
      default:
        return;
    }
    newShape.on('selected', () => {
      setSelectedObject(newShape);
      setSelectedMenu(0);
    });

    canvas.add(newShape);
    canvas.renderAll();
  };

  const addText = () => {
    if (canvas) {
      const text = new fabric.Textbox('Nội dung văn bản của bạn', {
        left: 50,
        top: 50,
        width: 150,
        fill: color,
        fontSize: 20,
      });
      text.on('selected', () => {
        setSelectedObject(text);
        setSelectedMenu(1);
      });
      canvas.add(text);
    }
  };

  const deleteSelectedObject = () => {
    if (canvas) {
    }
  };

  const renderMenuDetail = (selectedMenu: number) => {
    switch (selectedMenu) {
      case 0:
        return <CongCu addShape={addShape} addImage={addImage} />;
      case 1:
        return (
          <>
            <Button onClick={addText} className="bg-[#8b3dff] hover:bg-[#662ad4]">
              Thêm ô văn bản
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <Input type="file" onChange={handleUploadImage} />
            <div className="grid gap-2 grid-cols-2">
              {listImage.map((item, index) => (
                <div key={index}>
                  <img
                    src={item}
                    alt="image"
                    className="w-full h-[120px] cursor-pointer"
                    onClick={() => {
                      addImage(item);
                    }}
                  />
                </div>
              ))}
            </div>
          </>
        );
      case 3:
        return (
          <ColorPickerContainer>
            <SketchPicker
              color={color}
              onChange={(color) => {
                handleColorChange(color.hex);
              }}
            />
          </ColorPickerContainer>
        );
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="flex w-[5%] flex-col items-center justify-between  bg-[#18191b]  py-4">
        <div className="grid gap-2 w-full">
          <TooltipProvider>
            {listMenuCustomize.map((item, index) => (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    key={index}
                    className={`flex flex-col hover:bg-[#252627] ${
                      item.id - 1 == selectedMenu ? `bg-[#252627]` : `bg-transparent transition-all duration-300`
                    } w-full rounded-0 justify-center items-center p-2`}
                    onClick={() => {
                      setSelectedMenu(item.id - 1);
                    }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.title}</span>
                    <p className="text-white text-[10px]"> {item.title}</p>
                  </button>
                </TooltipTrigger>
                <TooltipContent>{item.title}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <div className="grid gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <UndoIcon className="h-5 w-5" />
                  <span className="sr-only">Undo</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <RedoIcon className="h-5 w-5" />
                  <span className="sr-only">Redo</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ZoomInIcon className="h-5 w-5" />
                  <span className="sr-only">Zoom In</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Zoom In</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ZoomOutIcon className="h-5 w-5" />
                  <span className="sr-only">Zoom Out</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Zoom Out</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* menu detail */}
      <div className="flex w-[20%] flex-col bg-[#252627]">
        <div className="sticky top-0 z-10   px-4 py-3">
          <h3 className="text-lg text-white font-medium">{listMenuCustomize[selectedMenu].title}</h3>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="grid gap-2 p-4">{renderMenuDetail(selectedMenu)}</div>
        </div>
      </div>
      <div className="flex-1 bg-muted">
        <div className="flex h-full items-center justify-center">
          <div className="grid gap-4 rounded-lg bg-background p-8 shadow-lg">
            <div className="aspect-[4/3] flex justify-center flex-col items-center w-[700px] h-[700px] rounded-lg border bg-white">
              <ContainerWrapper bg={selectedImg}>
                <div className="relative w-[300px] h-[300px] border-dotted border-[1px] border-gray-500">
                  <canvas width="300" height="300" ref={canvaRef} />
                </div>
              </ContainerWrapper>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="rounded-full w-10 h-10 bg-black hover:bg-black"
                  onClick={() => {
                    setSelectedImg(IMGShirt);
                  }}
                ></Button>
                <Button
                  variant="outline"
                  className="rounded-full w-10 h-10 bg-red-500 hover:bg-red-500"
                  onClick={() => {
                    setSelectedImg(IMGShirtRed);
                  }}
                ></Button>
                <Button
                  variant="outline"
                  className="rounded-full w-10 h-10 bg-yellow-500 hover:bg-yellow-500"
                  onClick={() => {
                    setSelectedImg(IMGShirtYellow);
                  }}
                ></Button>
              </div>
              <Button variant="outline" onClick={handleExportCanvasAsImage}>
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContainerWrapper = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${(props) => props.bg});
  width: 100%;
  height: 100%;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const ColorPickerContainer = styled.div`
  margin: 20px;
  label {
    margin-right: 10px;
  }
`;
