# useEffect Hook - Best Practices

The purpose of this project is to learn and apply the best practices to avoid errors when using the `useEffect` hook. The main ideas are as follows:

1. Always Specify the Dependencies Array:
   - It is crucial to always specify the dependencies array in the `useEffect` hook. If you don't specify it, you won't have control over when the `useEffect` hook will re-render your component.

2. Check Every Item in the Dependency Array:
   - When working with non-primitive values like arrays or objects, it is important to check each item in the dependency array. This prevents issues with array or object references.

3. Unmount the Fetch in the `useEffect`:
   - Unmounting the fetch operation in the `useEffect` hook is recommended to avoid memory-related problems.


