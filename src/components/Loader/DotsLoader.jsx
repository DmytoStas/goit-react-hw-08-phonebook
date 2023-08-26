import { ThreeDots } from 'react-loader-spinner';

export const DotsLoader = () => {
  return (
    <ThreeDots
      height="40"
      width="40"
      color="#1976d2"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
