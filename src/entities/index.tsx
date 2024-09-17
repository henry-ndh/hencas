import * as fabric from 'fabric';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import IMGShirt from '@/assets/images/shirt.png';
import { Button } from '@/components/ui/button';

function App() {
  const canvaRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [color, setColor] = useState<string>('#ff0000'); // State for selected color
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null); // State for the selected object

  useEffect(() => {
    if (canvaRef.current) {
      const fabricCanvas = new fabric.Canvas(canvaRef.current);
      setCanvas(fabricCanvas);

      // Handle object selection
      // fabricCanvas.on('selection:created', (e) => {
      //   setSelectedObject(e.target);
      // });

      // fabricCanvas.on('selection:updated', (e) => {
      //   setSelectedObject(e.target);
      // });

      // fabricCanvas.on('selection:cleared', () => {
      //   setSelectedObject(null); // Clear selection when no object is selected
      // });

      // Cleanup when component unmounts
      return () => {
        fabricCanvas.dispose();
      };
    }
  }, []);

  // Handle color change for selected object
  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    if (selectedObject) {
      selectedObject.set('fill', newColor);
      canvas?.renderAll();
    }
  };

  // Add circle to canvas
  const addElement = () => {
    if (canvas) {
      const radius = 30;
      const circle = new fabric.Circle({ radius, fill: color, top: 100, left: 100 });
      canvas.add(circle);
      circle.on('selected', () => {
        setSelectedObject(circle);
      });
    }
  };

  // Add text to canvas
  const addText = () => {
    if (canvas) {
      const text = new fabric.Textbox('New Text', {
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

  console.log(selectedObject);

  return (
    <>
      <ContainerWrapper bg={IMGShirt} className="container">
        <div style={{ position: 'absolute', border: '1px dotted gray', top: '27%', left: '22%' }}>
          <canvas width="300" height="300" ref={canvaRef} />
        </div>
      </ContainerWrapper>

      {/* Color Picker */}
      <ColorPickerContainer>
        <label htmlFor="colorPicker">Pick Color:</label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)} // Change color of selected object
        />
      </ColorPickerContainer>

      <Button onClick={addElement}>Add Circle</Button>
      <Button onClick={addText}>Add Text</Button>
    </>
  );
}

export default App;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${(props) => props.bg});
  width: 80%;
  height: 100%;
  background-size: contain;
  margin-left: 25%;
  background-repeat: no-repeat;
  position: relative;
`;

const ColorPickerContainer = styled.div`
  margin: 20px;
  label {
    margin-right: 10px;
  }
`;
