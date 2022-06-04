import { ContentType } from '../../types/enum';

export type InfoCardProps = {
  image: string;
  name: string;
  onPress?: () => void;
  size?: 'small' | 'large';
  subTitle?: string;
  type: ContentType;
};

export type ModifierProps = Pick<InfoCardProps, 'size' | 'type'>;
