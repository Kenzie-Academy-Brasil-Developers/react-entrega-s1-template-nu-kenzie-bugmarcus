export interface TypeOfValue {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const typeOfValue: readonly TypeOfValue[] = [
  { value: "entrada", label: "Entrada", isFixed: true },
  { value: "saida", label: "Saida" },
];
