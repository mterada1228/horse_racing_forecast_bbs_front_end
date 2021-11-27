import { FC } from "react";
import { Breadcrumbs } from "@mui/material";
import { styled } from "@mui/system";
import Breadcrumb from "../atoms/breadcrumb";

interface Props {
  breadcrumbs: { text: string; url: string }[];
}

const StyledBreadcrumbs = styled(Breadcrumbs)(() => ({
  marginTop: "3%",
  marginBottom: "3%",
}));

const MyBreadcrumbs: FC<Props> = (props: Props) => {
  const { breadcrumbs } = props;

  return (
    <StyledBreadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs.map((breadcrumb, i) => (
        <Breadcrumb key={i} text={breadcrumb.text} url={breadcrumb.url} />
      ))}
    </StyledBreadcrumbs>
  );
};

export default MyBreadcrumbs;
