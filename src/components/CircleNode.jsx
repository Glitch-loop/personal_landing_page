import { memo } from 'react';
import { useStore } from '@xyflow/react';

export default memo(({ id }) => {
    const label = useStore((s) => {
    const node = s.nodeLookup.get(id);

    if (!node) {
      return null;
    }
  });

  return (
    <>
      <div 
      onClick={() => {console.log("Hola mundo")}}
      className="w-12 h-12 bg-project-color-yellow  rounded-full">
        <div>Hola mundo</div>
      </div>
    </>
  );
});
