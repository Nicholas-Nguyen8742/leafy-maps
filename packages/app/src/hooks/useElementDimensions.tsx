import { useCallback, useEffect, useMemo, useState } from 'react'

export function useElementDimensions(idAttribute: string) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const node = useMemo(() => document.getElementById(idAttribute),
    [idAttribute, document.getElementById(idAttribute)]
  );

  const nodeWidth = node?.getBoundingClientRect().width;
  const nodeHeight = node?.getBoundingClientRect().height;

  const handleResize = useCallback(() => {
    if (!node) {
      return;
    }

    setDimensions({
      width: node.getBoundingClientRect().width,
      height: node.getBoundingClientRect().height,
    })
  }, [node, nodeWidth, nodeHeight]);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [idAttribute, nodeWidth, nodeHeight]);

  return dimensions;
}

export default useElementDimensions;
