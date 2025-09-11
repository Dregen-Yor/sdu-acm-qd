import pandas as pd


def load_names_map(filepath, sheet_name=0, name_col=0):
    """
    从第一个 Excel 文件的指定工作表中读取姓名列表，存入一个 map（字典）并返回。

    参数:
        filepath (str): Excel 文件路径
        sheet_name (str|int): 工作表名称或索引，默认为第一个表
        name_col (int|str): 姓名所在列的索引或列名，默认为第一列

    返回:
        dict: 以姓名为键，值为 True 的字典
    """
    # 只读取指定列
    df = pd.read_excel(filepath, sheet_name=sheet_name, usecols=[name_col])
    # 去除缺失值并转换为字符串列表
    names = df.iloc[:, 0].dropna().astype(str).tolist()
    # 构建 map，快速查找
    return {name: True for name in names}


def check_people(first_file, second_file,
                 first_sheet=0, second_sheet=0,
                 first_name_col=0, second_name_col='Name',
                 output_file=None):
    """
    读取第二个 Excel 文件，判断每个人是否存在于第一个文件的姓名列表中，并可选地输出到新文件。

    参数:
        first_file (str): 第一个 Excel 文件路径
        second_file (str): 第二个 Excel 文件路径
        first_sheet (str|int): 第一个文件的工作表名称或索引
        second_sheet (str|int): 第二个文件的工作表名称或索引
        first_name_col (int|str): 第一个文件中姓名所在列的索引或列名
        second_name_col (int|str): 第二个文件中姓名所在列的列名或索引
        output_file (str|None): 如果指定，则将结果写入该 Excel 文件

    返回:
        pandas.DataFrame: 包含原始信息及 "Exists" 列的 DataFrame
    """
    # 加载第一个表的姓名 map
    name_map = load_names_map(first_file, first_sheet, first_name_col)

    # 读取第二个表中所有数据
    df2 = pd.read_excel(second_file, sheet_name=second_sheet)

    # 判断是否存在于 map 中，生成新的列
    df2['Exists'] = df2[second_name_col].astype(str).apply(lambda x: name_map.get(x, False))

    # 如果指定了输出文件，则保存
    if output_file:
        df2.to_excel(output_file, index=False)
        print(f"结果已保存到 {output_file}")

    return df2


if __name__ == '__main__':
    # 示例用法
    first_file = 'first.xlsx'
    second_file = 'second.xlsx'
    # 如果第二张表的姓名列名不是 "Name"，请按需修改
    result_df = check_people(
        first_file,
        second_file,
        first_sheet=0,
        second_sheet=0,
        first_name_col=0,
        second_name_col=0,
        output_file='matched_results.xlsx'
    )
    print(result_df)
