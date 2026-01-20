"use client";

import { Button, ButtonProps } from "@mui/material";
import { useRouter } from "next/navigation";

type ActionButtonProps = {
      /** Path tujuan, contoh: /product/123 */
      href?: string;

      /** Custom click handler (opsional) */
      onClick?: () => void;

      /** Label button */
      label?: string;
} & ButtonProps;

export default function ActionButton({ href, onClick, label, ...buttonProps }: ActionButtonProps) {
      const router = useRouter();

      const handleClick = () => {
            if (onClick) {
                  onClick();
                  return;
            }

            if (href) {
                  router.push(href);
            }
      };

      return (
            <Button size="small" variant="contained" onClick={handleClick} {...buttonProps}>
                  {label}
            </Button>
      );
}
