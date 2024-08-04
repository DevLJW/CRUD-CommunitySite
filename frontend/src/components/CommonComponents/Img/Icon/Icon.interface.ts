export interface IIcon {
  src?: string;
  style?: React.CSSProperties;
  updateclick?: () => void;
  deleteclick?: (event: any) => Promise<void>;
  returnclick?: () => void;
  id?: string;
  state?: string;
}
