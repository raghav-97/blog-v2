export default function Card({ title, content, author }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-lg text-gray-700">{content}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-700 font-bold">Created by: {author}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          View
        </button>
      </div>
    </div>
  );
}
