import * as React from 'react';
import styled from 'styled-components';
import {
  color,
  fontSize,
  fontWeight,
  space,
  width,
  // Types
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  SpaceProps,
  WidthProps,
} from 'styled-system';
import {Box, Flex, Card, Image, Heading, Text} from 'rebass';
import {blue, green, red, gold, grey} from '@ant-design/colors';
import BaseAutoComplete, {AutoCompleteProps} from 'antd/lib/auto-complete';
import BaseCheckbox, {CheckboxProps} from 'antd/lib/checkbox';
import BaseInput, {InputProps} from 'antd/lib/input/Input';
import BaseInputNumber, {InputNumberProps} from 'antd/lib/input-number';
import BaseTextArea, {TextAreaProps} from 'antd/lib/input/TextArea';
import BaseButton, {ButtonProps} from 'antd/lib/button';
import BaseIcon, {IconProps} from 'antd/lib/icon';
import BaseDivider, {DividerProps} from 'antd/lib/divider';
import BaseTag, {TagProps} from 'antd/lib/tag';
import Alert from 'antd/lib/alert';
import Avatar from 'antd/lib/avatar';
import Badge from 'antd/lib/badge';
import DatePicker from 'antd/lib/date-picker';
import Descriptions from 'antd/lib/descriptions';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import Modal from 'antd/lib/modal';
import notification from 'antd/lib/notification';
import Popconfirm from 'antd/lib/popconfirm';
import Popover from 'antd/lib/popover';
import Progress from 'antd/lib/progress';
import Radio from 'antd/lib/radio';
import Result from 'antd/lib/result';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
import Table from 'antd/lib/table';
import Timeline from 'antd/lib/timeline';
import Tooltip from 'antd/lib/tooltip';
import Upload from 'antd/lib/upload';

/**
 * This file mainly just handles wrapping antd (Ant Design) components with
 * styled-system properties, making it easier to customize these components
 * in React without writing any CSS or new custom styled components.
 *
 * It also serves as a list of all the rebass and antd components being used
 * throughout the app - so rather than importing directly from rebass or antd
 * in various components, we would import them indirectly through this file.
 */

export const colors = {
  white: '#ffffff',
  black: '#0e0e0e',
  primary: blue[5] || '#1890ff',
  green: green[5] || '#52c41a',
  red: red[5] || '#f5222d',
  gold: gold[5] || '#faad14',
  blue: blue, // expose all blues
  gray: grey, // expose all grays
};

const {Item: MenuItem, Divider: MenuDivider} = Menu;
const {Option: SelectOption} = Select;

type StyledTextAreaProps = TextAreaProps & SpaceProps & FontSizeProps;

const StyledTextArea = styled((props: StyledTextAreaProps) => (
  <BaseTextArea {...props} />
))`
  // NB: This is just a hack to increase specificity
  && {
    ${space}
    ${fontSize}
  }
`;

export const TextArea = ({
  onChangeText,
  ...props
}: StyledTextAreaProps & {
  onChangeText?: (value: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChangeText && typeof onChangeText === 'function') {
      onChangeText(e.target.value);
    } else if (props.onChange && typeof props.onChange === 'function') {
      props.onChange(e); // keep default behavior as well
    }
  };

  return <StyledTextArea {...props} onChange={handleChange} />;
};

export const Label = styled('label')`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
  ${color}
`;

export const AutoComplete = BaseAutoComplete;

type StyledInputProps = InputProps &
  SpaceProps &
  FontSizeProps &
  FontWeightProps;

const StyledInput = styled((props: StyledInputProps) => (
  <BaseInput {...props} />
))`
  // NB: This is just a hack to increase specificity
  && {
    ${space}
    ${fontSize}
    ${fontWeight}
  }
`;

export const Input = StyledInput;

type TextInputProps = StyledInputProps & {
  onChangeText?: (value: string) => void;
};

export const TextInput = ({onChangeText, ...props}: TextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeText && typeof onChangeText === 'function') {
      onChangeText(e.target.value);
    } else if (props.onChange && typeof props.onChange === 'function') {
      props.onChange(e); // keep default behavior as well
    }
  };

  return <Input type="text" {...props} onChange={handleChange} />;
};

export const Checkbox = ({
  onChangeChecked,
  ...props
}: CheckboxProps & {onChangeChecked?: (value: boolean) => void}) => {
  const handleChange = (e: any) => {
    if (onChangeChecked && typeof onChangeChecked === 'function') {
      onChangeChecked(e.target.checked);
    } else if (props.onChange && typeof props.onChange === 'function') {
      props.onChange(e); // keep default behavior as well
    }
  };

  return <BaseCheckbox {...props} onChange={handleChange} />;
};

export const NumberInput = styled(
  (props: InputNumberProps & SpaceProps & FontSizeProps & FontWeightProps) => (
    <BaseInputNumber {...props} />
  )
)`
  // NB: This is just a hack to increase specificity
  && {
    ${space}
    ${fontSize}
    ${fontWeight}
  }
`;

export const BorderlessInput = styled(Input)`
  // NB: This is just a hack to increase specificity
  && {
    border: none;
    padding: 0;

    &:focus {
      box-shadow: none;
    }
  }
`;

export const Button = styled(
  (props: ButtonProps & SpaceProps & FontSizeProps & WidthProps) => (
    <BaseButton {...props} />
  )
)`
  // NB: This is just a hack to increase specificity
  && {
    ${space}
    ${fontSize}
    ${width}
  }
`;

export const Divider = styled((props: DividerProps & SpaceProps) => (
  <BaseDivider {...props} />
))`
  // NB: This is just a hack to increase specificity
  && {
    ${space}
  }
`;

export const Tag = styled((props: TagProps & SpaceProps) => (
  <BaseTag {...props} />
))`
  // NB: This is just a hack to increase specificity
  && {
    ${space}
  }
`;

export const Icon = styled((props: IconProps & SpaceProps) => (
  <BaseIcon {...props} />
))`
  // NB: This is just a hack to increase specificity
  && {
    user-select: none;
    ${space}
  }
`;

export {
  // rebass
  Box,
  Flex,
  Card,
  Image,
  Heading,
  Text,
  // ant
  Alert,
  Avatar,
  Badge,
  DatePicker,
  Descriptions,
  Dropdown,
  Menu,
  MenuItem,
  MenuDivider,
  Modal,
  notification,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Result,
  Select,
  SelectOption,
  Spin,
  Table,
  Timeline,
  Tooltip,
  Upload,
};
