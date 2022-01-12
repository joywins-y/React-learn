import React from "react";

export default function ceshi() {
  return (
    <div>
      有时候push到了github后，发现刚刚提交的commit有问题，如何撤销操作呢
      首先，在本地回退版本，使用如下命令： git reset --hard HEAD^
      ^的个数表示回退几个版本，^^表示回到上上个版本。 然后，强制push: git push origin HEAD --force
    </div>
  );
}
