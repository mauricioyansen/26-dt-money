import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

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

      &::placeholder {
        color: ${(p) => p.theme["gray-500"]};
      }
    }

    button {
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
