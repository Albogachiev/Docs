'use client';
import { cn } from '@/lib/utils';
import { useEditorStore } from '@/store/use-editor-store';
import { Separator } from '@/components/ui/separator';
import {
  BoldIcon,
  LucideIcon,
  PrinterIcon,
  Redo2Icon,
  SpellCheckIcon,
  Undo2Icon,
} from 'lucide-react';
interface ToolbarButtonProps {
  isActive?: boolean;
  icon: LucideIcon;
  onClick: () => void;
}

const ToolbarButton = ({ onClick, isActive, icon: Icon }: ToolbarButtonProps) => {
  return (
    <button
      className={cn(
        'text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80',
        isActive && 'bg-neutral-200/80',
      )}
      onClick={onClick}
    >
      <Icon className='size-4' />
    </button>
  );
};

interface ToolbarButtonProps {
  label: string;
}
const Toolbar = ({}) => {
  const { editor } = useEditorStore();

  const sections: ToolbarButtonProps[][] = [
    [
      { label: 'Undo', icon: Undo2Icon, onClick: () => editor?.chain().focus().undo().run() },
      { label: 'Redo', icon: Redo2Icon, onClick: () => editor?.chain().focus().redo().run() },
      { label: 'Print', icon: PrinterIcon, onClick: () => window.print() },
      {
        label: 'Spell Check',
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute('spellcheck');
          editor?.view.dom.setAttribute('spellcheck', current === 'false' ? 'true' : 'false');
        },
      },
    ],
    [
      {
        label: 'Bold',
        isActive: editor?.isActive('bold'),
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: 'Italic',
        isActive: editor?.isActive('bold'),
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
    ],
  ];
  return (
    <div className='bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto'>
      {sections[0].map((item, i) => (
        <ToolbarButton key={i} {...item} />
      ))}
      <Separator orientation='vertical' className='h-6 bg-neutral-300' />
      {/* font-famili */}
      <Separator orientation='vertical' className='h-6 bg-neutral-300' />
      {/* heading */}
      <Separator orientation='vertical' className='h-6 bg-neutral-300' />
      {/* fonst-size */}
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation='vertical' className='h-6 bg-neutral-300' />
    </div>
  );
};

export default Toolbar;
