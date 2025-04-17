'use client';

import {
  Modal as ModalHeroUi,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal';
import { ReactNode } from 'react';
import { SlotsToClasses } from '@heroui/theme';

interface ModalProps {
  isOpen: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  content?: ReactNode;
  onOpenChange: () => void;
  classNames?:
    | SlotsToClasses<'base' | 'body' | 'footer' | 'header' | 'wrapper' | 'backdrop' | 'closeButton'>
    | undefined;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onOpenChange, classNames, header, content, footer } = props;

  return (
    <ModalHeroUi isOpen={isOpen} classNames={classNames} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
        <ModalBody>{content}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </ModalHeroUi>
  );
};
