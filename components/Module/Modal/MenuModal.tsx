import Router from "next/router";
import styled from "styled-components";

const MenuItem = [
  { id: "Work" },
  { id: "Portfolio" },
  { id: "Experience" },
  { id: "Info" },
];

const MenuModal = () => {
  const router = Router;

  const handleScroll = (id: string) => {
    const top =
      document.getElementById(id)!.offsetTop -
      document.getElementById("header")!.offsetHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleInfoItem = (id: string) => {
    if (id !== "Info") {
      if (router.pathname !== "/") {
        router.push("/").then(() => {
          handleScroll(id);
        });
        return;
      }
      handleScroll(id);
      return;
    }
    router.push("info");
  };

  return (
    <__Wrapper>
      {MenuItem.map((item) => (
        <__Menu key={item.id} onClick={() => handleInfoItem(item.id)}>
          {item.id}
        </__Menu>
      ))}
    </__Wrapper>
  );
};

export default MenuModal;

const __Wrapper = styled.div``;

const __Menu = styled.div`
  padding: 1rem;
  color: #fff;
  text-align: center;
  font-family: "Syne";
  font-size: 1.5rem;
  background: #232323a1;
  &:hover {
    background: #545454a0;
  }
  cursor: pointer;
`;
