import React, { useState, FC } from 'react';

type InsertListProps = {
  addItem: (inputValue: string) => void;
  mode: boolean;
}

const InsertList: FC<InsertListProps> = ({ addItem, mode }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddClick();
    }
  };

  return (
    <div
    className="bg-white flex justify-between w-full max-w-[500px] mx-auto"
    style={{
      height: '50px',
      padding: '10px',
      border: '2px solid',
      borderRadius: '5px',
      backgroundColor: mode ? 'lightgray' : '#f1f1f1',
    }}
  >
    <input
      type="text"
      value={inputValue}
      placeholder="여기 입력하세요"
      onKeyPress={handleKeyPress}
      onChange={(e) => setInputValue(e.target.value)}
      className="flex-grow border-2 border-black rounded mr-2 px-2"
      style={{ minWidth: '0' }} // 최소 너비 제한 해제
    />
    <button
      className="w-20 rounded" // 화면에 맞춰 조절되는 너비
      style={{
        backgroundColor: mode ? '#808080' : 'lightgray',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
      onClick={handleAddClick}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = mode ? '#696969' : '#d3d3d3'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = mode ? '#808080' : 'lightgray'}
    >
      Insert
    </button>
  </div> );
};

export default InsertList;
