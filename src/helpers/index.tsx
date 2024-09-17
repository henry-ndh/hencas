import mergeImages from 'merge-images';

interface exportCanvasAsImageProps {
  canvas: any;
  IMGShirt: string;
  detailPosition: {
    xPosition: number;
    yPosition: number;
  };
}

export const exportCanvasAsImage = ({ canvas, IMGShirt, detailPosition }: exportCanvasAsImageProps) => {
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
    console.log('Position', detailPosition.xPosition, detailPosition.yPosition);
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
            x: detailPosition.xPosition,
            y: detailPosition.yPosition,
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
