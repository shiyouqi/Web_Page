
// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {    
    // 初始化所有学习模块
    delayedGreeting("小红", function(message) {
        console.log("收到问候：" + message);
});
    // setupSyncAsyncComparison();
    // setupCallbackLearning();
    // setupPromiseLearning();
    // setupAsyncAwaitLearning();
    // setupNetworkSimulation();
    // setupUIBlockingDemo();
});

// 延迟执行的回调函数
function delayedGreeting(name, callback) {
    console.log("开始准备问候...");
    
    // 2秒后执行回调函数
    setTimeout(function() {
        callback("你好，" + name + "！");
    }, 2000);
    
    console.log("问候已安排，请稍等...");
}

// 使用回调函数


// 第一个学习模块：同步 vs 异步对比
function setupSyncAsyncComparison() {
    console.log("--- 设置同步异步对比演示 ---");
    
    const syncBtn = document.getElementById('sync-demo');
    const asyncBtn = document.getElementById('async-demo');
    const clearBtn = document.getElementById('clear-log');
    const output = document.getElementById('comparison-output');
    
    // 同步执行演示
    syncBtn.addEventListener('click', function() {
        output.textContent = '开始同步执行演示...\n';
        
        // 模拟耗时操作（同步方式）
        // 注意：这种方式会阻塞UI，实际开发中应该避免
        const startTime = Date.now();
        output.textContent += '⏱️ 开始执行任务A\n';
        
        // 模拟耗时计算（这里用循环代替实际的复杂计算）
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
            sum += i;
        }
        
        output.textContent += '✅ 任务A完成\n';
        output.textContent += '⏱️ 开始执行任务B\n';
        
        // 另一个耗时操作
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
            result += Math.random();
        }
        
        output.textContent += '✅ 任务B完成\n';
        output.textContent += `🕒 总耗时：${Date.now() - startTime}毫秒\n`;
        output.textContent += '注意：在执行过程中UI被阻塞了！';
    });
    
    // 异步执行演示
    asyncBtn.addEventListener('click', function() {
        output.textContent = '开始异步执行演示...\n';
        const startTime = Date.now();
        
        output.textContent += '⏱️ 安排任务A执行\n';
        
        // 使用setTimeout模拟异步操作
        setTimeout(function() {
            output.textContent += '✅ 任务A完成\n';
        }, 1000);
        
        output.textContent += '⏱️ 安排任务B执行\n';
        
        setTimeout(function() {
            output.textContent += '✅ 任务B完成\n';
        }, 2000);
        
        output.textContent += '🚀 任务已安排，UI保持响应！\n';
        output.textContent += '注意：您可以继续操作界面！';
    });
    
    // 清空日志
    clearBtn.addEventListener('click', function() {
        output.textContent = '日志已清空，准备新的演示';
    });
}
