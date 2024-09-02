import { useCallback, useEffect, useMemo, useState } from 'react'

export function useElementDimensions(idAttribute: string) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const node = useMemo(() => document.getElementById(idAttribute),
    [
      idAttribute,
      document.getElementById(idAttribute),
    ]
  );

  const handleResize = useCallback(() => {
    if (!node) {
      return;
    }
    console.log(node.getBoundingClientRect());


    setDimensions({
      width: node.getBoundingClientRect().width,
      height: node.getBoundingClientRect().height,
    })
  }, [node, node?.getBoundingClientRect().width, node?.getBoundingClientRect().height]);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [idAttribute, node?.getBoundingClientRect().width, node?.getBoundingClientRect().height]);

  return dimensions;
}

export default useElementDimensions;
