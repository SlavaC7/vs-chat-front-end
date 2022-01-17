export type {
  TModalContextActoins,
  TModalAddAction,
  TModalContent,
  TModalContext,
  TModalTypes,
};

type TModalContext = {
  isVisible: boolean;
  modals: Array<TModalContent>;
  actions: TModalContextActoins;
};

type TModalContent = {
  mode:
    | 'Add_phone'
    | 'Add_company'
    | 'Create_company'
    | 'Session_termination'
    | 'Session_ended'
    | 'Modal2FA';
  reload?: (data?: any) => void;
};

type TModalTypes = 'error' | 'default';

type TModalContextActoins = {
  addAction: TModalAddAction;
};

type TModalAddAction = (modal: TModalContent) => void;
