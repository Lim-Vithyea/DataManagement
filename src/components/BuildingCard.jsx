const BuildingTypeCard = ({ title, buildingId, roomId }) => {
    return (
      <div className="border-2 p-4 rounded-md shadow-lg">
        <h2 className="block py-4 khmer-text font-bold text-xl text-blue-600">{title}</h2>
        <div className="pt-3 khmer-text">
          <label htmlFor={buildingId} className="block py-2 khmer-text font-bold text-sm text-gray-700">ចំនួនអគារ</label>
          <input
            type="number"
            id={buildingId}
            required
            placeholder="ចំនួនអគារ"
            min={0}
            className="w-full p-2 border rounded"/>
        </div>
        <div className="py-5 khmer-text">
          <label htmlFor={roomId} className="block py-2 khmer-text font-bold text-sm text-gray-700">ចំនួនបន្ទប់</label>
          <input
            type="number"
            id={roomId}
            required
            placeholder="ចំនួនបន្ទប់"
            min={0}
            className="w-full p-2 border rounded"/>
        </div>
      </div>
    );
  };

export default BuildingTypeCard;