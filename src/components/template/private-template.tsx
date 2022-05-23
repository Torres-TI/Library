import React from "react";
import Container from "../atoms/container";
import Body from "../molecules/body";
import SideMenu from "../molecules/side-menu";
import Header from "../organisms/header";

export interface PrivateTemplateProps {
  title?: string;
  children: React.ReactNode;
}
const PrivateTemplate: React.FC<PrivateTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex h-scree w-screen">
      <SideMenu />
      <div className="flex flex-col w-full p-7">
        <Container>
          <Header title={title} />
          <Body>{children}</Body>
        </Container>
      </div>
    </div>
  );
};

export default PrivateTemplate;
