import { PenToolIcon, TypeIcon, ImageIcon, RectangleVerticalIcon, LayersIcon, SettingsIcon } from '@/based/config/SVGIcon';
import ImgCanva1 from '@/assets/canvas/canvas1.webp';
import ImgCanva2 from '@/assets/canvas/canvas2.webp';

export const MenuHeader = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'Services',
    link: '/services',
  },
  {
    id: 3,
    name: 'Resume',
    link: '/resume',
  },
  // {
  //     id: 4,
  //     name: 'Projects',
  //     link: '/projects',
  // },
  // {
  //     id: 5,
  //     name: 'Contact',
  //     link: '/contact',
  // },
];

export const listMenuCustomize = [
  {
    id: 1,
    icon: PenToolIcon,
    title: 'Công cụ',
  },
  {
    id: 2,
    icon: TypeIcon,
    title: 'Văn bản',
  },
  {
    id: 3,
    icon: ImageIcon,
    title: 'Image Tool',
  },
  {
    id: 4,
    icon: RectangleVerticalIcon,
    title: 'Color Picker',
  },
  {
    id: 5,
    icon: LayersIcon,
    title: 'Layers',
  },
  {
    id: 6,
    icon: SettingsIcon,
    title: 'Settings',
  },
];

export const ImgCustomize = [
  {
    id: 1,
    img: ImgCanva1,
  },
  {
    id: 2,
    img: ImgCanva2,
  },
];
