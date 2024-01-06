// function generante id random for each user
export const generateId = () => {
  return (
    Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
  );
};

export const normalizeString = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};
