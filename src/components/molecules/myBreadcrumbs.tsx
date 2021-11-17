import { FC } from "react";
import { Breadcrumbs, Link } from "@mui/material";
import Breadcrumb from "../atoms/breadcrumb";

interface Props {
  breadcrumbs: { text: string; url: string }[];
}

const MyBreadcrumbs: FC<Props> = (props: Props) => {
  const { breadcrumbs } = props;

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs.map((breadcrumb, i) => (
        <Breadcrumb key={i} text={breadcrumb.text} url={breadcrumb.url} />
      ))}
    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;
