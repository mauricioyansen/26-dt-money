import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(p) => p.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(p) => p.theme["gray-900"]};
      color: ${(p) => p.theme["gray-300"]};
      padding: 1rem;

      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &::placeholder {
        color: ${(p) => p.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${(p) => p.theme["green-500"]};
      color: ${(p) => p.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background: ${(p) => p.theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(p) => p.theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: auto.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${(p) => p.theme["gray-700"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(p) => p.theme["gray-300"]};
  transition: background-color 0.2s;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px
      ${(p) =>
        p.variant === "income" ? p.theme["green-500"] : p.theme["red-500"]};
  }

  svg {
    color: ${(p) =>
      p.variant === "income" ? p.theme["green-300"] : p.theme["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${(p) => p.theme["gray-600"]};
  }

  &[data-state="checked"] {
    color: ${(p) => p.theme.white};
    background: ${(p) =>
      p.variant === "income" ? p.theme["green-500"] : p.theme["red-500"]};

    svg {
      color: ${(p) => p.theme.white};
    }
  }
`;
