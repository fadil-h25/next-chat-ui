export function ChatFilterTabs() {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button className="px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          Semua
        </button>
        <button className="px-4 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          Belum dibaca
        </button>
        <button className="px-4 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          Favorit
        </button>
      </div>

      <button className="px-4 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
        Grup
      </button>
    </div>
  );
}
