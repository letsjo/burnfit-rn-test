const getNowDate = () => {
  const today = new Date();
  return {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  };
};

export default getNowDate;
