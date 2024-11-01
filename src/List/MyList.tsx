import React, { useState, FC } from 'react';
import List from './List';

// 각 항목의 타입 정의
type ListItem = {
  num: number;
  contents: string;
};

// MyListProps의 list 타입 정의
type MyListProps = {
  list: ListItem[];
  removeItem: (num: number) => void; // removeItem에 매개변수 추가
  mode: boolean;
};

const MyList: FC<MyListProps> = ({ list, removeItem, mode }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({}); // 체크 상태를 저장할 객체

  const handleCheckboxChange = (num: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [num]: !prev[num], // 체크 상태 반전
    }));
  };

  return (
    <div
      className="bg-white"
      style={{
        width: '500px',
        height: '370px',
        padding: '10px',
        border: '2px solid ',
        borderRadius: '5px',
        margin: '10px',
        backgroundColor: mode ? 'lightgray' : '#f1f1f1',
      }}
    >
      <h1 className="text-xl font-bold">My List</h1>
      <ul>
        {list.map((item) => (
          <List
            key={item.num} // key 추가
            num={item.num}
            contents={item.contents}
            removeItem={() => removeItem(item.num)} // removeItem 호출 방식 변경
            isChecked={!!checkedItems[item.num]} // 체크 상태 전달
            onCheckboxChange={() => handleCheckboxChange(item.num)} // 체크박스 상태 변경 함수 전달
          />
        ))}
      </ul>
    </div>
  );
};

export default MyList;
