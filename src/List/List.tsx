import React, { FC } from 'react';
import './CustomCheckBox.css';

type ListProps = {
  num: number;
  contents: string;
  removeItem: (num: number) => void;
  isChecked: boolean;
  onCheckboxChange: () => void;
}

const List: FC<ListProps> = ({ num, contents, removeItem, isChecked, onCheckboxChange }) => {
  const handleRemove = () => {
    removeItem(num); // 항목 삭제
  };

  return (
    <li
      className="flex items-center m-2 p-2 rounded border border-black transition-opacity duration-200" // Tailwind CSS 클래스 추가
      style={{
        width: '450px',
        opacity: isChecked ? 0.5 : 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <form>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={onCheckboxChange} // 부모의 상태 변경 함수 호출
            style={{
              display: 'none',
            }}
          />
          <span className={`checkbox ${isChecked ? 'checked' : ''}`}></span>
        </label>
      </form>
      <div
        className="flex justify-between flex-1 px-4 py-1"
      >
        <span className="line-clamp-1 text-center flex-1">{contents}</span>
      </div>
      <button 
        onClick={handleRemove} 
        className="remove-button bg-red-500 text-white rounded px-2 py-1 hover:bg-red-700 transition-colors duration-200"
      >
        삭제
      </button>
    </li>
  );
};

export default List;
