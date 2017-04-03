from PIL import Image
from os import path

from os import listdir


def to_resized_images(image_path, width, height, suffix="", out_folder_name=""):
    files = [f for f in listdir(image_path) if path.isfile(path.join(image_path, f))][1:]

    for f in files:
        try:
            im = Image.open(path.join(image_path, f))
            im.thumbnail((width, height), Image.ANTIALIAS)

            file_name, ext = path.splitext(f)
            out_file = file_name + suffix + ext
            im.save(path.join(image_path, out_folder_name, out_file))
        except IOError as err:
            print("Cannot create thumbnail for ", f)
            print("Reason : " + str(err))


from . import Config

abs_images_folder_path = path.abspath("images")


# from scripts.images import sizeModifier
def get_experience_size_images():
    desktop_size = Config.experience_image_config["desktop_size"]
    print(desktop_size)
    to_resized_images(image_path=path.join(abs_images_folder_path, "projects"),
                      **desktop_size,
                      suffix=".experience",
                      out_folder_name="experience")


def get_profile_pic_size_images():
    desktop_size = Config.profile_image_config["desktop_size"]
    print(desktop_size)
    to_resized_images(image_path=path.join(abs_images_folder_path, "introduction"),
                      **desktop_size,
                      suffix=".introduction")

