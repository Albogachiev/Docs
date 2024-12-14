import Editor from './editor';
import Toolbar from './toolbar';
interface Params {
  params: Promise<{ documentId: string }>;
}

const DocumentsIdPage = async ({ params }: Params) => {
  const { documentId } = await params;
  return (
    <div className='min-h-screen bg-[#FAFBFD]'>
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentsIdPage;
