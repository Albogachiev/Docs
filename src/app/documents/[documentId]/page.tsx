import Editor from './editor';
interface Params {
  params: Promise<{ documentId: string }>;
}

const DocumentsIdPage = async ({ params }: Params) => {
  const { documentId } = await params;
  return (
    <div>
      <h1 className='text-3xl'>Document Id:{documentId}</h1>
      <Editor />
    </div>
  );
};

export default DocumentsIdPage;
