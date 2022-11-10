
# 合并多个comimt记录

有时候多个comit合起来才是一个完成的任务, 为了保证远端commit的历史流畅性, 可以通过rebase命令来合并多个commit

1. 选择某个历史commit为基点, 改基点之后提交的commit都将被合并成一个新的commit
```
# -i 后面紧跟的就是基点commit, 比如当选取HEAD~2为基点时, 则合并HEAD和HEAD~1两个commit
git rebase -i HEAD~2
```

2. 进入vim界面后, 输入-i进入`INSERT`模式, 把出第一个以外的pick改为s, 意为合并
3. 按下`ESC`键退出`INSERT`模式, 输入`:wq`保存并退出, git将开始执行rebase操作
4. 操作结束后, 会再次进入一个要求输入`commit message`的vim界面, 把旧的message删除, 输入一条新的commit message后保存退出. 如果只是合并本地的commit的话, 那么到这一步已经结束了.
5. 为了改变远程分支的comimt历史, 还需要强制push, 完成commit合并操作
```
git push -f
```
