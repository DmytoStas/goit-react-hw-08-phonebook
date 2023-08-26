import { StyledLoader } from './Loader.styled';

export const SpinLoader = () => {
  return (
    <StyledLoader
      height="30"
      width="30"
      color="#1976d2"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
