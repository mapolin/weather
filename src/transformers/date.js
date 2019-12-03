const groupDays = (data) => {
  const days = new Map();
  data.forEach((day) => {
    var dt = new Date(day.dt_txt);
    var dateString = dt.toLocaleString('bg-BG', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    days.set(dateString, [...(days.get(dateString) || []), day])
  });
  return days;
};

export { groupDays }