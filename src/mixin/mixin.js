export default {
  methods: {
    deBugLog(val) {
      // 根据当前环境输出log
      if (process.env.NODE_ENV === "development") {
        console.log(val);
      }
    },
  },
};
