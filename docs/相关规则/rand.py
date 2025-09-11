import time
import random
from datetime import datetime

contestants = [
    "选手A",
    "选手B",
    "选手C",
]

seed = int(time.time())
random.seed(seed)

random.shuffle(contestants)

print(f"随机种子: {seed}")

for i, contestant in enumerate(contestants):
    print(f"第{i+1}位演讲者为：{contestant}")