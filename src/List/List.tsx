import React ,{FC}from 'react';
import './CustomCheckBox.css';

type ListProps = {
  num: number;
  contents : string;
  removeItem : (num : number) => void;
  isChecked : boolean;
  onCheckboxChange : () => void;
}

const List:FC<ListProps> = ({ num, contents, removeItem, isChecked, onCheckboxChange }) => {
  const handleRemove = () => {
    removeItem(num); // 항목 삭제
  };

  return (
    <li
      className="flex m-4 rounded"
      style={{
        width: '450px',
        opacity: isChecked ? 0.5 : 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        border: 'solid 1px black',
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
        className="flex justify-between"
        style={{ paddingLeft: '30px', width: '100%', paddingTop: '5px' }}
      >
        <div className="flex justify-center" style={{ flex: 1 }}>
          <span className="line-clamp-1 text-center">{contents}</span>
        </div>
      </div>
      <button onClick={handleRemove} className="remove-button">
        삭제
      </button>
    </li>
  );
};

export default List;
