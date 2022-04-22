import { ReactNode } from "react";
import {
  ChatTitleTypography,
  MessageContentTypography,
  RegularTypography,
} from "./TypographyVariants";
import { TypographyVariant } from ".";

export type TypographyProps = {
  variant: TypographyVariant;
  children?: ReactNode;
};

export const Typography = ({ variant, children }: TypographyProps) => {
  switch (variant) {
    case TypographyVariant.MESSAGE_CONTENT:
      return <MessageContentTypography>{children}</MessageContentTypography>;
    case TypographyVariant.CHAT_TITLE:
      return <ChatTitleTypography>{children}</ChatTitleTypography>;
    case TypographyVariant.REGULAR:
      return <RegularTypography>{children}</RegularTypography>;
  }
};
