import Lottie from 'react-lottie';
import { useLoading } from 'hooks/useLoading';
import * as loadingAnimate from 'assets/json/loading.json';
import { WrapperLoading } from './styles';

export function Loading() {
  const { loading } = useLoading();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimate,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!loading) return null;

  return (
    <WrapperLoading>
      <Lottie options={defaultOptions} height={200} width={200} />
    </WrapperLoading>
  );
}
