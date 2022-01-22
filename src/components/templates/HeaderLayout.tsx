import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  //タグで囲ったものを受け取るときの型はReactNode
  children: ReactNode;
};
export const HeaderLayout: VFC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});
