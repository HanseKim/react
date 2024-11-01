import React, { useState, FC } from 'react';

type InsertListProps = {
  addItem: (inputValue: string) => void;
  mode: boolean;
}

const InsertList: FC<InsertListProps> = ({ addItem, mode }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    if (inputValue.trim()) {
      addItem(inputValue); // addItem 호출
      setInputValue(''); // 입력값 초기화
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddClick(); // Enter 키가 눌리면 addItem 호출
    }
  };

  return (
    <div
      className="bg-white flex justify-between"
      style={{
        width: '500px',
        height: '50px',
        padding: '10px',
        border: '2px solid',
        borderRadius: '5px',
        margin: '10px',
        backgroundColor: mode ? 'lightgray' : '#f1f1f1',
      }}
    >
      <input
        type="text"
        value={inputValue}
        placeholder="여기 입력하세요"
        onKeyPress={handleKeyPress}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          width: '400px',
          borderRadius: '5px',
          border: '2px solid black',
        }}
      />
      <button
        className="flex-end w-16 rounded"
        style={{
          backgroundColor: mode ? '#808080' : 'lightgray',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onClick={handleAddClick}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = mode ? '#696969' : '#d3d3d3'} // hover 색상 변경
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = mode ? '#808080' : 'lightgray'} // 원래 색상으로 돌아감
      >
        Insert
      </button>
    </div>
  );
};

export default InsertList;
