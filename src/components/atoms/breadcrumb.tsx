import { FC } from "react";
import { Link } from "@mui/material";

interface Props {
  text: string;
  url: string;
}

const Breadcrumb: FC<Props> = (props: Props) => {
  const { text, url } = props;

  return (
    <Link underline="hover" color="inherit" href={url}>
      {text}
    </Link>
  );
};

export default Breadcrumb;
