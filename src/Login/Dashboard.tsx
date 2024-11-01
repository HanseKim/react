import React, { useState } from 'react';
import MyList from '../List/MyList';
import InsertList from '../List/InsertList';

const Dashboard: React.FC<{ mode: boolean }> = ({ mode }) => {
  const [list, setList] = useState<{ num: number; contents: string }[]>([]);

  const MAX_ITEMS = 5; // 최대 항목 수 설정

  const addItem = (contents: string) => {
    if (list.length < MAX_ITEMS) {
      // 현재 항목 수가 최대 항목 수보다 적을 때만 추가
      setList((prev) => [...prev, { num: prev.length + 1, contents }]);
    } else {
      alert(`최대 ${MAX_ITEMS}개 항목만 추가할 수 있습니다.`); // 에러 메시지
    }
  };

  const removeItem = (num: number) => {
    setList((prev) => prev.filter((item) => item.num !== num)); // num에 해당하는 항목 제거
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <InsertList addItem={addItem} mode={mode} />
      <MyList list={list} removeItem={removeItem} mode={mode} />
    </div>
  );
};

export default Dashboard;
