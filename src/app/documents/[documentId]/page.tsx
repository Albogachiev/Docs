import Editor from './editor';
interface Params {
  params: Promise<{ documentId: string }>;
}

const DocumentsIdPage = async ({ params }: Params) => {
  const { documentId } = await params;
  return (
    <div className='min-h-screen bg-[#FAFBFD]'>
      <Editor />
    </div>
  );
};

export default DocumentsIdPage;
