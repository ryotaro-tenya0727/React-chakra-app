import { memo, ReactNode, VFC } from "react";

import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo(
  ({ children, onClick, disabled = false, loading = false }) => {
    return (
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        disabled={disabled || loading}
        //isLoadingがtrueの時回転
        isLoading={loading}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
);
