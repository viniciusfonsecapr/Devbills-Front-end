import { ReactNode } from "react";
import {
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
  Title,
  VisuallyHidden,
} from "./styles";

type DialogProps = {
  children: ReactNode;
  trigger: JSX.Element;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string; // Optional title prop
};

export function Dialog({
  children,
  trigger,
  open,
  onOpenChange,
  title,
}: DialogProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger>{trigger}</Trigger>
      <Portal>
        <Overlay />
        <Content>
          {title && (
            <Title>
              <VisuallyHidden>{title}</VisuallyHidden>
            </Title>
          )}
          {children}
        </Content>
      </Portal>
    </Root>
  );
}
