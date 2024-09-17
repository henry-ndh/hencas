import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ImgCustomize } from '@/based/data/Data';

interface CongCuProps {
  addImage: (url: string) => void;
  addShape: (shape: string) => void;
}

const CongCu: React.FC<CongCuProps> = (props) => {
  return (
    <div className="w-full bg-transparent text-white">
      <div>
        <Input type="search" placeholder="Tìm kiếm thành phần" className="w-full p-2 rounded-md" />
      </div>
      <div className="flex space-x-2 my-4">
        <Button className="bg-gray-700">Logo</Button>
        <Button className="bg-gray-700">Khung</Button>
        <Button className="bg-gray-700">Hình tròn</Button>
        <Button className="bg-gray-700">Hoa</Button>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Hình ảnh</h2>
        <div className="flex items-center mb-2 gap-3">
          {ImgCustomize.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt="recent"
              className="w-[70px] h-[70px] cursor-pointer"
              width="50"
              height="50"
              onClick={() => {
                props.addImage(item.img);
              }}
              style={{ aspectRatio: '50/50', objectFit: 'cover' }}
            />
          ))}
        </div>
        <div className="flex items-center mb-2"></div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Hình dạng</h2>
        <div className="flex items-center mb-2 gap-2">
          {/* Rectangle */}
          <div className="w-16 h-16 bg-gray-600 cursor-pointer" onClick={() => props.addShape('rectangle')} />
          {/* Circle */}
          <div className="w-16 h-16 bg-gray-600 ml-2 cursor-pointer rounded-full" onClick={() => props.addShape('circle')} />
          {/* Triangle */}
          <div
            className="w-16 h-16 bg-gray-600 ml-2 cursor-pointer"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            onClick={() => props.addShape('triangle')}
          />
          {/* Star */}
          <div
            className="w-16 h-16 bg-gray-600 ml-2 cursor-pointer"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
            onClick={() => props.addShape('star')}
          />
          {/* Line */}
        </div>
      </div>
    </div>
  );
};

export { CongCu };
