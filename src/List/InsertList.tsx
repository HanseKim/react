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
      className={`bg-white flex justify-between w-full max-w-[500px]`} // 수정된 부분
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
        className="w-full border-2 border-black rounded" // Tailwind CSS 클래스 추가
        style={{width:"400px" , marginRight:"5px"}}
      />
      <button
        className="flex-end w-16 rounded"
        style={{
          width:"100px",
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
    </div>
  );
};

export default InsertList;
