import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import * as fabric from 'fabric';
import styled from 'styled-components';
import IMGShirt from '@/assets/shirt.png';
import { SketchPicker } from 'react-color';
import mergeImages from 'merge-images';
import { listMenuCustomize } from '@/based/data/Data';
import { UndoIcon, RedoIcon, ZoomInIcon, ZoomOutIcon } from '@/based/config/SVGIcon';
import { Input } from '@/components/ui/input';

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
    radius: 0,
    fill: '',
  });

  useEffect(() => {
    if (canvaRef.current) {
      const fabricCanvas = new fabric.Canvas(canvaRef.current);
      setCanvas(fabricCanvas);

      return () => {
        fabricCanvas.dispose();
      };
    }
  }, []);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    if (selectedObject) {
      selectedObject.set('fill', newColor);
      canvas?.renderAll();
    }
  };

  console.log(detailCanvas);

  const exportCanvasAsImage = () => {
    if (canvas) {
      const dataUrl = canvas.toDataURL({
        format: 'png',
        quality: 1.0,
        multiplier: 2,
      });

      const imgCanvas = new Image();
      imgCanvas.src = dataUrl;
      const ImgBackground = new Image();
      ImgBackground.src = IMGShirt;
      ImgBackground.width = 700;
      ImgBackground.height = 700;
      console.log('Position', detailCanvas.xPosition, detailCanvas.yPosition);
      console.log('ImgBackground', ImgBackground);
      ImgBackground.onload = () => {
        mergeImages(
          [
            {
              src: ImgBackground.src,
              x: 0,
              y: 0,
            },
            {
              src: imgCanvas.src,
              x: detailCanvas.xPosition,
              y: detailCanvas.yPosition,
            },
          ],
          {
            width: 1000,
            height: 1000,
          }
        ).then((b64) => {
          const a = document.createElement('a');
          a.href = b64;
          a.download = 'canvas-image.png';
          a.click();
        });
      };
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

  const addElement = () => {
    if (canvas) {
      const radius = 30;
      const circle = new fabric.Circle({ radius, fill: color, top: 100, left: 100 });
      canvas.add(circle);
      circle.on('selected', () => {
        setSelectedObject(circle);
      });
      circle.on('moving', () => {
        let xPosition = circle.left;
        let yPosition = circle.top;
        console.log(circle);
        setDetailCanvas({
          xPosition,
          yPosition,
          radius,
          fill: color,
        });
      });
    }
  };
  const addText = () => {
    if (canvas) {
      const text = new fabric.Textbox('Nội dung văn bản của bạn', {
        left: 50,
        top: 50,
        fill: color,
        fontSize: 20,
      });
      text.on('selected', () => {
        setSelectedObject(text);
      });
      canvas.add(text);
    }
  };

  const renderMenuDetail = (selectedMenu: number) => {
    switch (selectedMenu) {
      case 0:
        return (
          <Button onClick={addElement} className="bg-[#8b3dff] hover:bg-[#662ad4]">
            Thêm hình tròn
          </Button>
        );
      case 1:
        return (
          <Button onClick={addText} className="bg-[#8b3dff] hover:bg-[#662ad4]">
            Thêm ô văn bản
          </Button>
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
      <div className="flex w-72 flex-col bg-[#252627]">
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
              <ContainerWrapper bg={IMGShirt}>
                <div className="relative w-[300px] h-[300px] border-dotted border-[1px] border-gray-500">
                  <canvas width="300" height="300" ref={canvaRef} />
                </div>
              </ContainerWrapper>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Save</Button>
              <Button variant="outline" onClick={exportCanvasAsImage}>
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
